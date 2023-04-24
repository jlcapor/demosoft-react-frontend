import { useEffect, useState } from 'react';
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
}, []);
  return (
	<div>Dashboard</div>
  )
}
export default Dashboard