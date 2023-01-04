
function SectionNav(props) {
    const section = props.section

    return (
        <>
            <div className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    {section.title}
                </a>
            </div>
        </>
    )
}

export default SectionNav