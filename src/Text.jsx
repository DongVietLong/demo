export default function Text({children, type = "default", isTag, tag}){
    const _class =`text text-${type}`; //text-link
    return (
        <div className={_class}>
            {children}
            {isTag && <div className={"tag"}>{tag}</div>}
        </div>
    );
}