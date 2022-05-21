
export const Restauraunt=({
    image:url,
    name:title,
    cost,
  
    votes,
    rating,
   cuisine: tags,
    reviews
})=>{
return(
    <div style={{display:"flex" , gap:"2rem" ,border:"1px solid black", margin:"0.5rem",padding:"4px"}}>
        <div>
            <img style={{width:"50px",padding:"4px"}} src={url} alt={title} />
        </div>
        <div>
            <div>{title}</div>
            <div>{tags}</div>
            <div>Cost ${cost}</div>
        </div>
        <div>{rating} (Rating)</div>
        <div>{votes} (Votes)</div>
        <div>{reviews} (Reviews)</div>
    </div>
)


}