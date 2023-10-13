'use client'

import React, { useState } from 'react';


function Typing() {
  const [keys] = useState([
    { label: '`', width: '2', row: '1' },
    { label: '1', width: '2', row: '1' },
    { label: '2', width: '2', row: '1' },
    { label: '3', width: '10', row: '1' },
    { label: '4', width: '10', row: '1' },
    { label: '5', width: '10', row: '1' },
    { label: '6', width: '10', row: '1' },
    { label: '7', width: '10', row: '1' },
    { label: '8', width: '10', row: '1' },
    { label: '9', width: '10', row: '1' },
    { label: '0', width: '10', row: '1' },
    { label: '-', width: '10', row: '1' },
    { label: '=', width: 'full', row: '1', flexGrow: true },
    { label: 'delete', width: 'full', row: '1', flexGrow: true },
    { label: 'tab', width: '14', row: '2' },
    { label: 'Q', width: '10', row: '2' },
    { label: 'W', width: '10', row: '2' },
    { label: 'E', width: '10', row: '2' },
    { label: 'R', width: '10', row: '2' },
    { label: 'T', width: '10', row: '2' },
    { label: 'Y', width: '10', row: '2' },
    { label: 'U', width: '10', row: '2' },
    { label: 'I', width: '10', row: '2' },
    { label: 'O', width: '10', row: '2' },
    { label: 'P', width: '10', row: '2' },
    { label: '[', width: '12', row: '2' },
    { label: ']', width: '12', row: '2' },
    { label: '|', width: 'full', row: '2', flexGrow: true },
    { label: 'caps', width: '16', row: '3' },
    { label: 'A', width: '10', row: '3' },
    { label: 'S', width: '10', row: '3' },
    { label: 'D', width: '10', row: '3' },
    { label: 'F', width: '10', row: '3' },
    { label: 'G', width: '10', row: '3' },
    { label: 'H', width: '10', row: '3' },
    { label: 'J', width: '10', row: '3' },
    { label: 'K', width: '10', row: '3' },
    { label: 'L', width: '10', row: '3' },
    { label: ';', width: '10', row: '3' },
    { label: '\'', width: '10', row: '3' },
    { label: 'return', width: 'full', row: '3', flexGrow: true },
    { label: 'shift', width: '20', row: '4' },
    { label: 'Z', width: '10', row: '4' },
    { label: 'X', width: '10', row: '4' },
    { label: 'C', width: '10', row: '4' },
    { label: 'V', width: '10', row: '4' },
    { label: 'B', width: '10', row: '4' },
    { label: 'n', width: '10', row: '4' },
    { label: 'M', width: '10', row: '4' },
    { label: ',', width: '10', row: '4' },
    { label: '.', width: '10', row: '4' },
    { label: '/', width: '10', row: '4' },
    { label: 'shift', width: '16', row: '4', flexGrow: true },
    { label: '▲', width: '10', row: '4' },
    { label: '', width: '10', row: '4' },
    { label: 'fn', width: '10', row: '5' },
    { label: 'ctrl', width: '10', row: '5' },
    { label: 'opt', width: '10', row: '5' },
    { label: 'cmd', width: '10', row: '5' },
    { label: '', width: 'full', row: '5', flexGrow: true },
    { label: 'cmd', width: '10', row: '5' },
    { label: 'opt', width: '10', row: '5' },
    { label: '◄', width: '10', row: '5' },
    { label: '▼', width: '10', row: '5' },
    { label: '►', width: '10', row: '5' },
  ]);

  const doSomething = () => {
    alert('Hello!');
  };

  return (
    <main className="min-w-screen bg-purple-500 text-purple-700 text-xs min-h-screen flex items-center justify-center">
      <div className="bg-purple-700 p-3 rounded-lg border-2 border-t-purple-600 border-x-purple-800 border-b-purple-900 shadow-lg ">
        <div className="p-1 bg-purple-900 rounded overflow-hidden">
          <div className="flex space-x-[2px]">
            {keys.map((key) =>
              key.row === '1' ? (
                <div
                  key={key.label}
                  className={`h-10 min-w-10 ${key.flexGrow ? 'flex-grow' : ''}`}
                >
                  <button
                    className="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
                    style={{ width: `calc(${key.width} * 2.5rem)` }}
                  >
                    <div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
                      <div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
                      <div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
                    </div>
                    <div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
                      <span className="leading-none">{key.label}</span>
                    </div>
                  </button>
                </div>
              ) : null
            )}
          </div>
          {keys.map((key) =>
              key.row === '1' ? (
                <div
                  key={key.label}
                  className={`h-10 min-w-10 ${key.flexGrow ? 'flex-grow' : ''}`}
                >
                  <button
                    className="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
                    style={{ width: `calc(${key.width} * 2.5rem)` }}
                  >
                    <div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
                      <div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
                      <div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
                    </div>
                    <div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
                      <span className="leading-none">{key.label}</span>
                    </div>
                  </button>
                </div>
              ) : null
            )}

          {/* Repeat similar code for other rows */}
        </div>
      </div>
    </main>
  );
}

export default Typing;
