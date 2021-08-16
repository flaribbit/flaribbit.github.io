const { execSync } = require("child_process");
const { statSync } = require("fs");
const { parse } = require("path");
const { read: readMatter } = require("gray-matter");
const { sync } = require("globby");
const parseHeader = require("vitepress/dist/node/utils/parseHeader");
const inferTitle = (frontmatter, content) => {
  if (frontmatter.home) {
    return "主页";
  }
  if (frontmatter.title) {
    return parseHeader.deeplyParseHeader(frontmatter.title);
  }
  const match = content.match(/^\s*#+\s+(.*)/m);
  if (match) {
    return parseHeader.deeplyParseHeader(match[1].trim());
  }
  return '';
};

function getGitTime(file) {
  try {
    return 1000 * parseFloat(execSync("git log -1 --format=%at " + file));
  } catch {
    return 0;
  }
}

function getPages() {
  return sync("blog/**.md").map(file => {
    console.log(file);
    const { content, data: frontmatter } = readMatter(file);
    return {
      file: file,
      href: parse(file).name,
      create: statSync(file).birthtimeMs,
      update: getGitTime(file),
      title: inferTitle(frontmatter, content),
      frontmatter: frontmatter,
    }
  }).sort((a, b) => a.create < b.create);
}

exports.getPages = getPages;
