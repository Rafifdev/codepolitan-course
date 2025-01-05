function TextTemplate({text=("Your Quote Here.."), author=("😎")}){
  return(
    <div className="text-center font-serif">
    <h1>{text}</h1>
    <br />
    <h3>- {author} -</h3>
    </div>
  )
}

export default TextTemplate