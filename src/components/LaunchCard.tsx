import React from 'react';

interface LaunchCardProps {
  launch: {
    id: string;
    mission: { name: string };
    rocket: { name: string };
    site: string;
  };
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  return (
    <article className="w-full bg-gray-900 rounded-lg shadow-lg p-4 m-2 hover:bg-gray-700 transition ease-in-out duration-300 px-4">
      <p className="flex items-center text-sm text-gray-400">
        <span>Mission code:</span>
        <strong className="text-white ml-2">{launch.id}</strong>
      </p>
      <p className="flex items-center text-sm text-gray-400">
        <span>Mission:</span>
        <strong className="text-white ml-2">{launch.mission.name}</strong>
      </p>
      <p className="flex items-center text-sm text-gray-400">
        <span>Rocket:</span>
        <strong className="text-white ml-2">{launch.rocket.name}</strong>
      </p>
      <p className="flex items-center text-sm text-gray-400">
        <span>Site:</span>
        <strong className="text-white ml-2">{launch.site}</strong>
      </p>
    </article>
  );
};

export { LaunchCard };
