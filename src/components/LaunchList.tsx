import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../graphql/queries';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LaunchCard } from './LaunchCard';
interface Launch {
  id: string;
  mission: { name: string };
  rocket: { name: string };
  site: string;
}

const LaunchList = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES, {
    variables: { after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (loading && !data) {
    return <p className="text-center text-gray-500">Loading launches...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  const handleFetchMore = () => {
    fetchMore({
      variables: { after: data.launches.cursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          launches: {
            ...fetchMoreResult.launches,
            launches: [
              ...prevResult.launches.launches,
              ...fetchMoreResult.launches.launches,
            ],
          },
        };
      },
    });
  };

  return (
    <InfiniteScroll
      dataLength={data.launches.launches.length}
      next={handleFetchMore}
      hasMore={data.launches.hasMore}
      loader={<h4 className="text-center text-gray-500">Loading...</h4>}
      endMessage={
        <p className="text-center text-gray-300 mt-5">
          <b>You have seen all launches</b>
        </p>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data && data.launches.launches.map((launch: Launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default LaunchList;
