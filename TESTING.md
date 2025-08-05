# Testing Strategy for Happy Family Game

This document outlines the testing approach for the Happy Family Game project.

## Overview

The project uses the following testing tools:

- **Vitest**: A Vite-native test runner that's fast and compatible with the Jest API
- **React Testing Library**: For testing React components in a user-centric way
- **JSDOM**: For simulating a browser environment in Node.js

## Test Structure

Tests are organized in the `src/__tests__` directory and follow these patterns:

- Unit tests for hooks: `src/__tests__/[hookName].test.ts`
- Component tests: `src/__tests__/[ComponentName].test.tsx`

## Running Tests

The following npm scripts are available for running tests:

```bash
# Run all tests once
pnpm test

# Run tests in watch mode (for development)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

## Test Coverage

We aim for high test coverage of the core game logic and UI components. The coverage report can be generated using the `test:coverage` script, which will create a detailed HTML report in the `coverage` directory.

## Testing Approach

### Game Logic Testing

The game logic is primarily contained in the `useGameLogic` hook. Tests for this hook focus on:

- Game initialization with different configurations
- Player interactions (asking for cards, completing families)
- AI behavior
- Win condition detection

### Component Testing

UI components are tested with React Testing Library, focusing on:

- Correct rendering with different props
- User interactions (clicks, selections)
- State changes and their effect on the UI

### Mocking

We use mocks for:

- External dependencies (contexts, hooks)
- Browser APIs not available in JSDOM
- Random number generation (for deterministic tests)

## Adding New Tests

When adding new features, follow these steps for testing:

1. Write tests for the new functionality
2. Ensure existing tests still pass
3. Check that test coverage remains high

## Continuous Integration

Tests are automatically run as part of the CI pipeline to ensure code quality before merging.

## Detailed Documentation

For more detailed information about specific test files and approaches, see the [Test Directory README](src/__tests__/README.md).