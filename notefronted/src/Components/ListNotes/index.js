import './List.css';

const ListNotes = ({ documents = [] }) => {
    const listItems = documents.map((o) => {
      return <ListItem key={o._id} {...o} />
    })
    return (
      <section>
        {listItems}
      </section>
    );
  }
  const ListItem = ({ title,description,keyword,created }) => {
    return (
      <section className={['listItem', type.toLowerCase()].join(' ')}>
        <div>
        <span><b>{(title)}</b></span>
          <span><b>{description}</b></span>
         
        </div>
        <div>
          <span>{keyword.join(",")}</span>
          <span>{new Date(created).toLocaleDateString()}</span>
        </div>
      </section>
    )
  }
  export default ListNotes;