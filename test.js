async function runTests() {
  console.log('Starting tests...');
  await new Promise(resolve => setTimeout(() => {
    console.log('Waiting for 3 sec..');
    resolve();
  }, 3000));
  console.log('Tests completed!');
}

runTests().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
