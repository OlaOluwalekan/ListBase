const Select = ({ array }) => {
  return <div>Select</div>
}

const ItemList = ({ array }) => {
  return (
    <article>
      {array.map((item, i) => {
        return <Item key={i} {...item} />
      })}
    </article>
  )
}

const Item = ({ text }) => {
  return <span>{text}</span>
}

export default Select
