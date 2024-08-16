import '@testing-library/jest-dom/vitest';
import createFetchMock from 'vitest-fetch-mock';

// Enables tests to traverse routes
createFetchMock(vi).enableMocks();
