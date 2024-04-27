import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_LAUNCHES } from '../graphql/queries';
import LaunchList from './LaunchList';

const mocks = [
  {
    request: {
      query: GET_LAUNCHES,
      variables: { after: null },
    },
    result: {
      data: {
        launches: {
          cursor: "1583556631",
          hasMore: true,
          launches: [
            { id: "1", mission: { name: "Mission 1" }, rocket: { name: "Rocket 1" }, site: "Site 1" },
            { id: "2", mission: { name: "Mission 2" }, rocket: { name: "Rocket 2" }, site: "Site 2" },
          ],
        },
      },
    },
  },
];

describe('LaunchList Component', () => {
  it('fetches data from cache on second render', async () => {
    const component = (
      <MockedProvider mocks={mocks} addTypename={false}>
        <LaunchList />
      </MockedProvider>
    );

    // Render the component for the first time
    const { rerender } = render(component);
    await waitFor(() => expect(screen.getByText('Mission 1')).toBeInTheDocument());

    // Render the component for the second time
    rerender(component);

    // Check if the data is fetched from the cache without a loading state
    await waitFor(() => expect(screen.getByText('Mission 1')).toBeInTheDocument());
    expect(screen.queryByText('Loading launches...')).not.toBeInTheDocument();
  });
});