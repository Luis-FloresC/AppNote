//import './List.css';

const ListNotes = ({ documents = [] }) => {
  const listItems = documents.map((o) => {
    return <ListItem key={o._id} {...o} />
  })
  return (
    <>
      <div className="grid h-full card bg-base-300 rounded-box place-items-center">
        {listItems}
      </div>
    
    </>

  );
}
const ListItem = ({ title, description, keyword, created }) => {
  return (
    <>
    <div className="card w-full bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <h3 className="link">{keyword.join(" ")}</h3>
        <p>{description}</p>
        <p>{new Date(created).toLocaleDateString()}</p>
        <div className="card-actions justify-end">
          <button className="btn">Editar Nota</button>
          <button className="btn">Eliminar Nota</button>
        </div>
      </div>
    </div>
      <div className="divider text-white"></div>
      </>
  )
}
export default ListNotes;