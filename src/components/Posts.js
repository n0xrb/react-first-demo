export const Posts = () => {
	const handleClick = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	};
	return <button onClick={handleClick}>Traer datos</button>;
};
