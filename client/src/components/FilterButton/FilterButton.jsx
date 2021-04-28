function FilterButton ({filter, handleFilter}) {
    const filterButtons = ['Top 5', 'A-Student', 'B-Student', 'C-Student', 'D-Student', 'F-Student']
    
    return (
        <>
        <button onClick={handleFilter(filter)}>{filter}</button>
        </>
    )
}

export default FilterButton