import {useContext, useRef, useEffect, memo} from 'react'
import {dataContext} from '../helper/dataContext'
import {useHistory} from "react-router-dom"

function Create() {
    let history =  useHistory()
    // let cat1 = useRef()
    // let cat2 = useRef()
    // let cat3 = useRef()
    // let cat4 = useRef()
    // let cat5 = useRef()
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

    let info = {
        one: {
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
        two: {
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
        three: {
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
        four: {
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
        five: {
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
    }

    function input(e) {
        let target = e.target;
        let curCat = cat.current.value;
        let curQuestion = questionSelector.current.value;
        switch (target.id) {
            case "part":
                info[curCat].part = target.value;
                break;
            case "question":
                info[curCat][curQuestion].question = target.value
                break;
            case "value":
                info[curCat][curQuestion].value = target.value
                break;
            case "answer":
                info[curCat][curQuestion].answer = target.value
                break;
            default:
                break;
        }
    }

    function change(e) {
        let curCat = cat.current.value;
        let curQuestion = questionSelector.current.value;
        // if (e.target.id == "category") {
            question.current.value = info[curCat][curQuestion].question;
            answer.current.value = info[curCat][curQuestion].answer;
            value.current.value = info[curCat][curQuestion].value;
            name.current.value = info[curCat].part;
        // } else {
        //     question.current.value = info[curCat][curQuestion]
        // }
    }

    function handle() {
        // let cat1Q = cat1.current.querySelectorAll(".question")
        // let cat1V = cat1.current.querySelectorAll(".value")
        // let cat1A = cat1.current.querySelectorAll(".answer")

        // let cat2Q = cat2.current.querySelectorAll(".question")
        // let cat2V = cat2.current.querySelectorAll(".value")
        // let cat2A = cat2.current.querySelectorAll(".answer")

        // let cat3Q = cat3.current.querySelectorAll(".question")
        // let cat3V = cat3.current.querySelectorAll(".value")
        // let cat3A = cat3.current.querySelectorAll(".answer")

        // let cat4Q = cat4.current.querySelectorAll(".question")
        // let cat4V = cat4.current.querySelectorAll(".value")
        // let cat4A = cat4.current.querySelectorAll(".answer")

        // let cat5Q = cat5.current.querySelectorAll(".question")
        // let cat5V = cat5.current.querySelectorAll(".value")
        // let cat5A = cat5.current.querySelectorAll(".answer")

        // let all = [
        //     {
        //     part: cat1.current.querySelector(".name").value,
        //     one: {
        //         question: cat1Q[0].value,
        //         value: cat1V[0].value,
        //         answer: cat1A[0].value
        //     },
        //     two: {
        //         question: cat1Q[1].value,
        //         value: cat1V[1].value,
        //         answer: cat1A[1].value
        //     },
        //     three: {
        //         question: cat1Q[2].value,
        //         value: cat1V[2].value,
        //         answer: cat1A[2].value
        //     },
        //     four: {
        //         question: cat1Q[3].value,
        //         value: cat1V[3].value,
        //         answer: cat1A[3].value
        //     },
        //     five: {
        //         question: cat1Q[4].value,
        //         value: cat1V[4].value,
        //         answer: cat1A[4].value
        //     }
        //     },
        //     {
        // part: cat2.current.querySelector(".name").value,
        // one: {
        //     question: cat2Q[0].value,
        //     value: cat2V[0].value,
        //     answer: cat2A[0].value
        // },
        // two: {
        //     question: cat2Q[1].value,
        //     value: cat2V[1].value,
        //     answer: cat2A[1].value
        // },
        // three: {
        //     question: cat2Q[2].value,
        //     value: cat2V[2].value,
        //     answer: cat2A[2].value
        // },
        // four: {
        //     question: cat2Q[3].value,
        //     value: cat2V[3].value,
        //     answer: cat2A[3].value
        // },
        // five: {
        //     question: cat2Q[4].value,
        //     value: cat2V[4].value,
        //     answer: cat2A[4].value
        // }
        //     },
        //     {
        //         part: cat3.current.querySelector(".name").value,
        //         one: {
        //             answer: cat3A[0].value,
        //             question: cat3Q[0].value,
        //             value: cat3V[0].value
        //         },
        //         two: {
        //             answer: cat3A[1].value,
        //             question: cat3Q[1].value,
        //             value: cat3V[1].value
        //         },
        //         three: {
        //             answer: cat3A[2].value,
        //             question: cat3Q[2].value,
        //             value: cat3V[2].value
        //         },
        //         four: {
        //             answer: cat3A[3].value,
        //             question: cat3Q[3].value,
        //             value: cat3V[3].value
        //         },
        //         five: {
        //             answer: cat3A[4].value,
        //             question: cat3Q[4].value,
        //             value: cat3V[4].value
        //         }
        //     },
        //     {
        //         part: cat4.current.querySelector(".name").value,
        //         one: {
        //             answer: cat4A[0].value,
        //             question: cat4Q[0].value,
        //             value: cat3V[0].value
        //         },
        //         two: {
        //             answer: cat4A[1].value,
        //             question: cat4Q[1].value,
        //             value: cat4V[1].value
        //         },
        //         three: {
        //             answer: cat4A[2].value,
        //             question: cat4Q[2].value,
        //             value: cat4V[2].value
        //         },
        //         four: {
        //             answer: cat4A[3].value,
        //             question: cat4Q[3].value,
        //             value: cat4V[3].value
        //         },
        //         five: {
        //             answer: cat4A[4].value,
        //             question: cat4Q[4].value,
        //             value: cat4V[4].value
        //         }
        //     },
        //     {
        //         part: cat5.current.querySelector(".name").value,
        //         one: {
        //             answer: cat5A[0].value,
        //             value: cat5V[0].value,
        //             question: cat5Q[0].value
        //         },
        //         two: {
        //             answer: cat5A[0].value,
        //             value: cat5V[0].value,
        //             question: cat5Q[0].value
        //         },
        //         three: {
        //             answer: cat5A[2].value,
        //             value: cat5V[2].value,
        //             question: cat5Q[2].value
        //         },
        //         four: {
        //             answer: cat5A[3].value,
        //             value: cat5V[3].value,
        //             question: cat5Q[3].value
        //         },
        //         five: {
        //             answer: cat5A[4].value,
        //             value: cat5V[4].value,
        //             question: cat5Q[4].value
        //         }
        //     }
        // ];

        // setData([
        //     ...data,
        //     , 
        //     ...all
        // ])

        // history.push("/play")
        console.log(info)
    }

  return (
    <section className=" flex flex-col justify-around">
        {/* <div className="w-[90%] border-[2px] border-black flex flex-col justify-around items-start m-auto mt-[10px] pr-4 pl-4" ref={cat1}>
            <div className='flex mt-4'>
                <h1 className='text-[18px] text-medium mr-[10px]'>Category 1 Name: </h1>
                <input type="text" className='name border-black border-[2px]'/>
            </div>
            <div className="flex justify-around items-start flex-row w-full flex-wrap mt-3 mb-4">
                <div className="flex flex-col">
                    <p>Question 1:</p>
                    <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 2:</p>
                    <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 3:</p>
                    <input type="text" className="border-black border-[2px] question" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 4:</p>
                    <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 5:</p>
                    <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
            </div>
        </div>
        
        <div className="w-[90%] border-[2px] border-black flex flex-col justify-around items-start m-auto mt-[10px] pr-4 pl-4" ref={cat2}>
            <div className='flex mt-4'>
                <h1 className='text-[18px] text-medium mr-[10px]'>Category 2 Name: </h1>
                <input type="text" className='name border-black border-[2px]'/>
            </div>
            <div className="flex justify-around items-start flex-row w-full flex-wrap mt-3 mb-4">
                <div className="flex flex-col">
                    <p>Question 1:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 2:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 3:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 4:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 5:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
            </div>
        </div>

        <div className="w-[90%] border-[2px] border-black flex flex-col justify-around items-start m-auto mt-[10px] pr-4 pl-4" ref={cat3}>
            <div className='flex mt-4'>
                <h1 className='text-[18px] text-medium mr-[10px]'>Category 3 Name: </h1>
                <input type="text" className='name border-black border-[2px]'/>
            </div>
            <div className="flex justify-around items-start flex-row w-full flex-wrap mt-3 mb-4">
                <div className="flex flex-col">
                    <p>Question 1:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 2:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 3:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 4:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 5:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
            </div>
        </div>

        <div className="w-[90%] border-[2px] border-black flex flex-col justify-around items-start m-auto mt-[10px] pr-4 pl-4" ref={cat4}>
            <div className='flex mt-4'>
                <h1 className='text-[18px] text-medium mr-[10px]'>Category 4 Name: </h1>
                <input type="text" className='name border-black border-[2px]'/>
            </div>
            <div className="flex justify-around items-start flex-row w-full flex-wrap mt-3 mb-4">
                <div className="flex flex-col">
                    <p>Question 1:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 2:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 3:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 4:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 5:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
            </div>
        </div>

        <div className="w-[90%] border-[2px] border-black flex flex-col justify-around items-start m-auto mt-[10px] pr-4 pl-4" ref={cat5}>
            <div className='flex mt-4'>
                <h1 className='text-[18px] text-medium mr-[10px]'>Category 5 Name: </h1>
                <input type="text" className='name border-black border-[2px]'/>
            </div>
            <div className="flex justify-around items-start flex-row w-full flex-wrap mt-3 mb-4">
                <div className="flex flex-col">
                    <p>Question 1:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 2:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 3:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 4:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
                <div className="flex flex-col">
                    <p>Question 5:</p>
                     <input type="text" className="question border-black border-[2px]" placeholder="Question"/>
                    <input type="text" className="answer border-black border-[2px]" placeholder="Answer"/>
                    <input type="number" placeholder="Value" className='value border-black border-[2px]'/>
                </div>
            </div>
        </div> */}
        <div>
            <div>
                <h1>which category</h1>
                <select name="category" id="category" ref={cat} onChange={change}>
                    <option value="one">cat 1</option>
                    <option value="two">cat 2</option>
                    <option value="three">cat 3</option>
                    <option value="four">cat 4</option>
                    <option value="five">cat 5</option>
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