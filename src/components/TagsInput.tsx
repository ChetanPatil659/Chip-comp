import { useRef, useState } from "react"
import mockData from '../MOCK_DATA.json'

function TagsInput() {
    const [tags, setTags] = useState<any>([])
    const [data, setData] = useState<any>(mockData)
    const [search, setSearch] = useState<string>('')
    const visible = useRef<any>()

    const handleChange = (e: any) => {
        setSearch(e.target.value.toLowerCase())
    }

    const removeTags = (index: any) => {
        setTags(tags.filter((el: any, ind: number) => ind !== index))
    }

    const handleClick = (value: any) => {
        setTags([...tags, value])
        
        
    }

    const handleInputClick = (value: any) => {
        visible.current.style.display = 'block'
        console.log(visible.current.hasFocus());
    }

    return (
        <>
            <div className='tags-input-container'>

                {tags.map((el: any, ind: any) => (
                    <div className='tags-item' key={ind}>
                        <div className="profile-image"></div>
                        <span className='text'>{el}</span>
                        <span className='close' onClick={() => removeTags(ind)}>&times;</span>
                    </div>
                ))}


                <div className="input-container">
                    <input type="text" placeholder="Add New User . . ." className="tags-input" onChange={handleChange} onClick={handleInputClick} />
                    <div className="list-container" ref={visible}>
                        <ul>
                            {
                                mockData.map((el: any, ind: number) => {
                                    if (el.name.toLowerCase().includes(search)) {
                                        return (
                                            <li className="list-item" onClick={() => handleClick(el.name)} key={ind}>
                                                <span className="profile-image2"></span>
                                                <h4>{el.name}</h4>
                                                <p className="email">{data[ind].email}</p>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TagsInput