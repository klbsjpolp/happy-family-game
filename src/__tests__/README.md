# Happy Family Game - Testing Documentation

This directory contains tests for the Happy Family Game application. The tests are written using Vitest and React Testing Library.

## Test Structure

The tests are organized by component/hook:

- `useGameLogic.test.ts`: Tests for the game logic hook
- `GameBoard.test.tsx`: Tests for the game board component
- `PlayerHand.test.tsx`: Tests for the player hand component
- `GameSetup.test.tsx`: Tests for the game setup component

## Testing Approach

### Hook Testing

For the `useGameLogic` hook, we use the `renderHook` function from React Testing Library to test the hook's behavior. We mock the dependencies (toast and animation) to isolate the hook's logic.

Key aspects tested:
- Game initialization
- Game state management
- Card asking and receiving
- AI turn logic
- Win condition detection

### Component Testing

For React components, we use React Testing Library to render the components and test their behavior. We focus on:

1. **Rendering**: Ensuring components render correctly with different props
2. **User Interactions**: Testing that clicking buttons, selecting options, etc. work as expected
3. **State Changes**: Verifying that components update correctly when their state changes

## Mocking Strategy

We use Vitest's mocking capabilities to mock:

- External dependencies (contexts, hooks)
- Child components when needed
- Browser APIs (setTimeout)
- Random number generation (for deterministic tests)

## Running Tests

To run the tests, use the following command:

```bash
pnpm test
```

To run tests with coverage:

```bash
pnpm test:coverage
```

## Adding New Tests

When adding new tests:

1. Create a new test file in the `__tests__` directory
2. Import the component or hook to test
3. Mock any dependencies as needed
4. Write tests that cover the main functionality
5. Ensure tests are deterministic (no random behavior)

## Best Practices

- Keep tests focused on one aspect of functionality
- Use descriptive test names
- Avoid testing implementation details
- Test from the user's perspective when possible
- Use `beforeEach` to set up common test state
- Clean up mocks after tests with `afterEach` or `vi.clearAllMocks()`