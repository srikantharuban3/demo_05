const fs = require('fs');
const path = require('path');

describe('TestSuite from TestSuite.md', () => {
  let testSuiteContent;
  
  beforeAll(() => {
    const testSuitePath = path.join(__dirname, '..', 'TestSuite.md');
    testSuiteContent = fs.readFileSync(testSuitePath, 'utf8');
  });

  test('should have valid test suite structure', () => {
    expect(testSuiteContent).toContain('# Instruction');
    expect(testSuiteContent).toContain('# Test suite');
  });

  test('should contain test automation engineer instruction', () => {
    expect(testSuiteContent).toContain('You are a test automation engineer');
    expect(testSuiteContent).toContain('Playwright MCP tools');
  });

  test('should contain user registration test case TC001', () => {
    expect(testSuiteContent).toContain('TC 001');
    expect(testSuiteContent).toContain('register a new customer');
  });

  test('should contain ParaBank navigation instruction', () => {
    expect(testSuiteContent).toContain('https://parabank.parasoft.com/parabank/index.htm');
    expect(testSuiteContent).toContain('Navigate to');
  });

  test('should contain registration form steps', () => {
    expect(testSuiteContent).toContain('Click on the Register link');
    expect(testSuiteContent).toContain('Fill the registration page');
  });

  test('should contain username requirements', () => {
    expect(testSuiteContent).toContain('unique username and password');
    expect(testSuiteContent).toContain('10 charactors and should be unique');
  });

  test('should contain form submission step', () => {
    expect(testSuiteContent).toContain('submit the form');
    expect(testSuiteContent).toContain('clicking on the register page');
  });

  test('should contain verification step', () => {
    expect(testSuiteContent).toContain('Verify that welcome message');
    expect(testSuiteContent).toContain('new username is displayed');
  });

  test('should contain HTML report requirement', () => {
    expect(testSuiteContent).toContain('Test Execution Report');
    expect(testSuiteContent).toContain('`.html` format');
  });

  test('should contain report details specification', () => {
    expect(testSuiteContent).toContain('Test case ID and description');
    expect(testSuiteContent).toContain('Pass/Fail status');
    expect(testSuiteContent).toContain('Execution timestamp');
  });

  test('should contain chart requirement', () => {
    expect(testSuiteContent).toContain('Bar chart');
  });
});