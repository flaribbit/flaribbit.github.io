---
title: indexedDB 入门
date: 2022-06-01 16:42:00
tags: [js, 笔记]
---

简单学习了一下 indexedDB，然后封装了一下。

---

## 打开数据库
```ts
export const openDatabase = (dbname: string): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(dbname);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result)
    request.onupgradeneeded = () => resolve(request.result);
  });
}
```

## 如果不存在则创建数据库
```ts
const prepareMessageStore = (db: IDBDatabase, name: string): void => {
  if (db.objectStoreNames.contains(name)) return;
  const store = db.createObjectStore(name, { keyPath: 'message_id' });
  store.createIndex('user_id', 'user_id', { unique: false });
  store.createIndex('time', 'time', { unique: false });
}
```

看着挺好，但是这里错了。

运行时会报错：`DOMException: Failed to execute 'createObjectStore' on 'IDBDatabase': The database is not running a version change transaction.`

原因是只有在 `onupgradeneeded` 回调中才能创建数据库，如果是 `onsuccess` 的回调中执行则会报这个错误。

所以要创建新表，就需要用一个更高的版本号重新 `open`，然后在 `onupgradeneeded` 回调中 `createObjectStore`。

~~不如把所有消息堆到一个表里吧！~~

## 存储消息
```ts
export const storeMessage = (db: IDBDatabase, name: string, message: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    prepareMessageStore(db, name);
    const request = db.transaction(name, 'readwrite')
      .objectStore(name)
      .add({
        message_id: message.message_id,
        user_id: message.user_id,
        name: message.sender.card || message.sender.nickname,
        time: message.time,
        text: message.message,
      });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
```

## 读取消息
```ts
export const getMessage = (db: IDBDatabase, name: string, limit: number = 10): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const res: any[] = []
    const request = db
      .transaction(name)
      .objectStore(name)
      .index('time')
      .openCursor(null, 'prev');
    request.onsuccess = () => {
      const cursor = request.result;
      if (cursor) {
        res.unshift(cursor.value);
        if (res.length < limit) {
          cursor.continue();
        } else {
          resolve(res);
        }
      } else {
        resolve(res);
      }
    }
    request.onerror = () => reject(request.error);
  });
}
```
