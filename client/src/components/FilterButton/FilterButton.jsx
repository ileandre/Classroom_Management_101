function FilterButton ({filter}) {
    const filterButtons = ['Top 5', 'A-Student', 'B-Student', 'C-Student', 'D-Student', 'F-Student']
    return (
        <div>
        <button>{filter}</button>
        </div>
    )
}

export default FilterButton