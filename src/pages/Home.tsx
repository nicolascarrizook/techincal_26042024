import LaunchList from '../components/LaunchList';

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto py-10"> 
        <h1 className="text-4xl font-bold text-center py-10">
          SpaceX <span
          className="text-blue-500"
          >Launches</span>
        </h1>
        <p className="w-2/3 mx-auto text-center text-gray-400 mb-4 text-lg">
          Here you can find all the launches that SpaceX has done.
        </p>
        <LaunchList />
      </div>
    </div>
  );
}

export default Home;