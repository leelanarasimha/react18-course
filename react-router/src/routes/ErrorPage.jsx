import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>The page you are trying is not available</p>
      <p>{error.statusText || error.message} </p>
    </div>
  );
}
