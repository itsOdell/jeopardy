import {useContext, useRef, useEffect, memo} from 'react'
import {dataContext} from '../helper/dataContext'
import {useHistory} from "react-router-dom"

function Create() {
    let history =  useHistory()
    let cat = useRef();
    let questionSelector = useRef();
    let question = useRef();
    let value = useRef();
    let answer = useRef();
    let name = useRef();
    let {data, setData} = useContext(dataContext);

    useEffect(() => {
        setData([])
    }, [])

    let info = [
        {
            part: "",
            one: {
                question: "",
                value: "",
                answer: ""
            },
            two: {
                question: "",
                value: "",
                answer: ""
            },
            three: {
                question: "",
                value: "",
                answer: ""
            },
            four: {
                question: "",
                value: "",
                answer: ""
            },     
            five: {
                question: "",
                value: "",
                answer: ""
            }
        },
        {
            part: "",
            one: {
                question: "",
                value: "",
                answer: ""
            },
            two: {
                question: "",
                value: "",
                answer: ""
            },
            three: {
                question: "",
                value: "",
                answer: ""
            },
            four: {
                question: "",
                value: "",
                answer: ""
            },     
            five: {
                question: "",
                value: "",
                answer: ""
            }
        },
        {
            part: "",
            one: {
                question: "",
                value: "",
                answer: ""
            },
            two: {
                question: "",
                value: "",
                answer: ""
            },
            three: {
                question: "",
                value: "",
                answer: ""
            },
            four: {
                question: "",
                value: "",
                answer: ""
            },     
            five: {
                question: "",
                value: "",
                answer: ""
            }
        },
        {
            part: "",
            one: {
                question: "",
                value: "",
                answer: ""
            },
            two: {
                question: "",
                value: "",
                answer: ""
            },
            three: {
                question: "",
                value: "",
                answer: ""
            },
            four: {
                question: "",
                value: "",
                answer: ""
            },     
            five: {
                question: "",
                value: "",
                answer: ""
            }
        },
        {
            part: "",
            one: {
                question: "",
                value: "",
                answer: ""
            },
            two: {
                question: "",
                value: "",
                answer: ""
            },
            three: {
                question: "",
                value: "",
                answer: ""
            },
            four: {
                question: "",
                value: "",
                answer: ""
            },     
            five: {
                question: "",
                value: "",
                answer: ""
            }
        }
    ]

    function input(e) {
        let target = e.target;
        let curCat = cat.current.value;
        let curQuestion = questionSelector.current.value;
        if (target.id === "part") {
            info[curCat].part = target.value;
        } else {
            info[curCat][curQuestion][target.id] = target.value
        }
    }

    function change() {
        let curCat = cat.current.value;
        let curQuestion = questionSelector.current.value;
        question.current.value = info[curCat][curQuestion].question;
        answer.current.value = info[curCat][curQuestion].answer;
        value.current.value = info[curCat][curQuestion].value;
        name.current.value = info[curCat].part;
    }

    function handle() {
        setData([
            ...data,
            ...info
        ])
        history.push("/play")
    }

  return (
    <section className=" flex flex-col justify-around">
        <div>
            <div>
                <h1>which category</h1>
                <select name="category" id="category" ref={cat} onChange={change}>
                    <option value="0">cat 1</option>
                    <option value="1">cat 2</option>
                    <option value="2">cat 3</option>
                    <option value="3">cat 4</option>
                    <option value="4">cat 5</option>
                </select>
            </div>
            <div>
                <h1>name for cat</h1>
                <input type="text" name="part" id="part" onInput={input} placeholder="name" ref={name}/>
            </div>
            <div>
                <h1>which question</h1>
                <select name="question" id="questionSelector" ref={questionSelector} onChange={change}>
                    <option value="one">q 1</option>
                    <option value="two">q 2</option>
                    <option value="three">q 3</option>
                    <option value="four">q 4</option>
                    <option value="five">q 5</option>
                </select>
            </div>
            <div>
                <input type="text" name="question" id="question" placeholder="Question" onInput={input} ref={question}/>
                <input type="number" name="value" id="value" placeholder="Value" onInput={input} ref={value}/>
                <input type="text" name="answer" id="answer" placeholder="Answer" onInput={input} ref={answer}/>
            </div>
        </div>
        <button className='w-[90%] pt-[5px] pb-[5px] text-[18px] border-[2px] border-black m-auto mt-4 mb-4' onClick={handle}>Create</button>
    </section>
  )
}

export default memo(Create)