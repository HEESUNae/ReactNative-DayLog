import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([
    {
      id: uuidv4(),
      title: 'Log 05',
      body: 'Log 05',
      date: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      title: 'Log 04',
      body: 'Log 04',
      date: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      title: 'Log 03',
      body: 'Log 03',
      date: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      title: 'Log 02',
      body: 'Log 02',
      date: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      title: 'Log 01',
      body: 'Log 01',
      date: new Date().toISOString(),
    },
  ]);

  Array.from({length: 10})
    .map((_, index) => ({
      id: uuidv4(),
      title: `Log ${index}`,
      body: `Log ${index}`,
      date: new Date().toISOString(),
    }))
    .reverse();

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  // 수정
  const onModify = modified => {
    // logs 배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  // 삭제
  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
