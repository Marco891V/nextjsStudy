
import classNames from "classnames"
import Link from "next/link"

function SectionNav(props) {
    const section = props.section

    const classes = classNames('nav-link', {
        'active': props.activeElement === section.slug,
    })

    return (
        <>
            <div className="nav-item">
                <Link href={'/category/'+section.slug} className={classes}>
                    {section.title}
                </Link>
            </div>
        </>
    )
}

export default SectionNav