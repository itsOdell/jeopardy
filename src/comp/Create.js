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
    <section className="flex flex-col justify-around w-full h-[100vh]">
        <div className="border-[2px] border-black w-[80%] m-auto p-4 pb-1 rounded-[6px]">
            <div className="flex mt-2 mb-2">
                <h1 className="mr-6 text-[20px]">Which category are you editing? </h1>
                <select name="category" id="category" ref={cat} onChange={change}>
                    <option value="0">Category 1</option>
                    <option value="1">Category 2</option>
                    <option value="2">Category 3</option>
                    <option value="3">Category 4</option>
                    <option value="4">Category 5</option>
                </select>
            </div>
            <div>
                <h1 className="text-[18px]">Name/subject of this category</h1>
                <input type="text" name="part" id="part" onInput={input} placeholder="name" ref={name} className="border-b-[1px] border-black"/>
            </div>
            <div className="flex mt-2 mb-2 flex-wrap gap-2">
                <div className="flex mr-4">
                <h1 className="mr-6 text-[18px]">Which question are you editing? </h1>
                <select name="question" id="questionSelector" ref={questionSelector} onChange={change}>
                    <option value="one">Question 1</option>
                    <option value="two">Question 2</option>
                  <option value="three">Question 3</option>
                   <option value="four">Question 4</option>
                   <option value="five">Question 5</option>
                </select>
                </div>
                <div className="">
                <input type="text" name="question" id="question" placeholder="Question" onInput={input} ref={question} className="mr-2 border-b-[1px] border-black"/>
                <input type="number" name="value" id="value" placeholder="Value" onInput={input} ref={value} className="mr-2 border-b-[1px] border-black"/>
                <input type="text" name="answer" id="answer" placeholder="Answer" onInput={input} ref={answer} className=" border-b-[1px] border-black"/>
                </div>
            </div>
        <button className='w-full pt-[5px] pb-[5px] text-[18px] border-[2px] border-black m-auto mt-4 mb-2 rounded-[6px]' onClick={handle}>Create</button>
        </div>
    </section>
  )
}

export default memo(Create)