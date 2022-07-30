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
const ListItem = ({ title, description, keyword, created,_id }) => {

  const keywords = keyword.map(
    (o) => {
      return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{o}</span>
      )
    }
  );
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg bg-primary-focus w-full">

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-sm text-left">{new Date(created).toLocaleDateString()}</div>
          <p className="text-white text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {keywords}
        </div>
        <div className="btn-group navbar-end ml-20">
          <button className="btn btn-info">Editar {_id}</button>
         
          <button className="btn btn-danger">Eliminar</button>
        </div>
      </div>
      <div className="divider text-white"></div>
    </>
  )
}
export default ListNotes;