import moment from 'moment'

const Todo = ({ title, theme, fontFamily, createdAt }) => {
  // console.log(createdAt)
  const createdDate = moment(createdAt?.seconds).format('MMMM DD, YYYY')
  return (
    <section
      style={{
        border: `2px solid ${theme}`,
        borderLeft: `20px solid ${theme}`,
      }}
    >
      <h2 style={{ fontFamily: fontFamily }}>{title}</h2>
      <div>
        <span>{createdDate}</span>
      </div>
    </section>
  )
}
export default Todo
