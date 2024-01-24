import "./Details.scss";

const Details = (params) => {
  const { details, repos } = params;
  return (
    <>
      <div>
        <div className="head">
          <img src={details.avatar_url} width="100px"></img>
          <p>{details.name}</p>
        </div>
        <p>
          <span>Location: </span>
          {details.location}
        </p>
        <p>
          <span>Bio: </span>
          {details.bio}
        </p>
      </div>
      <p>Repositories: </p>
      <ul>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Details;
