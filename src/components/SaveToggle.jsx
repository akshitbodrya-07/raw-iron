
const SaveToggle = ({ saved, onToggle }) => {
  return (
    <button
    onClick={onToggle}
    aria-label="Save class"
    className={`absolute top-3 right-3 text-lg leading-none ${saved ? 'text-orange group-hover:text-white' : 'text-ink/25 group-hover:text-white/70'}`}
    >
        {saved ? '★' : '☆'}
    </button>
  )
}

export default SaveToggle
