process.on('uncaughtException', (e) => {
  console.error('UNCAUGHT EXCEPTION STACK:\n', e.stack);
});
process.on('unhandledRejection', (reason) => {
  const e = reason instanceof Error ? reason : new Error(String(reason));
  console.error('UNHANDLED REJECTION STACK:\n', e.stack);
});
