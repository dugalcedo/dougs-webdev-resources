<script>
// @ts-nocheck

    import { onMount } from "svelte/internal";

    let answers = {
        "GENERAL": {},
        "HTML": {},
        "CSS": {},
        "JAVASCRIPT": {}
    }

    const groups = {
        "GENERAL": [
            {
                name: "Browsing your computer's files",
                subList: [
                    "Windows: File Explorer",
                    "Mac: Finder"
                ]
            },
            {
                name: "Keyboard shortcuts",
                subList: [
                    "Copy: CTRL/CMD+C",
                    "Paste: CTRL/CMD+P",
                    "Cut (Copy and delete): CTRL/CMD+X",
                    "Undo: CTRL/CMD+Z",
                    "Redo: CTRL/CMD+Y",
                    "Select All: CTRL/CMD+A",
                ]
            },
            {
                name: "Terminal/command prompt commands",
                subList: [
                    "cd",
                    "ls",
                    "touch",
                    "mv",
                ]
            },
            "quiz:What is indentation and why is it important?",
            "Sign up for github"
        ],
        "HTML": [
            "quiz:Write a tag.",
            "quiz:Write an element.",
            "quiz:Write a tag with an attribute.",
            "quiz:What goes in the head?",
            "quiz:What goes in the body?",
            "quiz:What's the difference between block and inline elements?",
            "quiz:Name five block elements and five inline elements.",
            "quiz:What is semantic HTML and why is it important?",
            "quiz:Name five semantic HTML elements.",
            "h1-h6, p",
            "a, img",
            "input",
            "label",
            "form",
            "table",
            "link & script",
            "id and class",
            "quiz:Why do we need IDs and classes?"
        ],
        "CSS": [
            "select by tagname",
            "select by id",
            "select by class",
            "background & color",
            "font-weight, font-style, text-decoration",
            "font-size, font-family",
            "border",
            "padding & margin",
            "the box model",
            "quiz:From innermost to outermost, what are the four parts of the box-model?",
            "box-sizing: border-box",
            "quiz:What's the difference between border and outline?",
            {
                name: "display",
                subList: [
                    "block",
                    "inline",
                    "inline-block",
                    "flex",
                    "grid",
                    "table",
                    "none"
                ]
            },
            {
                name: "position",
                subList: [
                    "absolute",
                    "relative",
                    "static",
                    "sticky",
                    "fixed"
                ]
            },
            "opacity vs. visibility",
            "z-index",
            "quiz:We have a button and we want it to be positioned absolutely so that it is in the top-right corner of its parent. We set positon: absolute, top: 0, and right: 0, but it's not behaving as we expected. Instead of being in the top-right corner of its parent, its in the top-right corner of the entire page. Why?",
            {
                name: "combinators",
                subList: [
                    "+",
                    "~",
                    ">",
                    "space"
                ]
            },
            "quiz:What is the difference between a child and a descendant?",
            "attribute selectors",
            "pseudo-classes",
            "pseudo-elements",
            "flex",
            "grid",
            "quiz:What is the difference between the flex/grid container and the flex/grid items?",
            "quiz:Name 3 properties that can go on a flex container, then 3 for grid (besides display: x)",
            "quiz:Name 3 properties that can go on a flex child",
            "quiz:What is the flex: property shorthand for?"
        ],
        "JAVASCRIPT": [
            "quiz:Define a variable named x with a value of 5",
            "quiz:Define a variable named y with a value of your name",
            "data types",
            "+ - * / ++ -- += -= == ===",
            "quiz:Write an if statement",
            "|| &&",
            "truthy vs falsy",
            "quiz:Write five falsy statements and five truthy statements.",
            "quiz:Write a for loop",
            "quiz:Write a while loop",
            "quiz:Define a function that logs your name to the console",
            "quiz:Call that function",
            "quiz:What is the difference between function definition and function invocation?",
            "quiz:What is a parameter? What is an argument?",
            "quiz:Define a function with two parameters",
            "quiz:Call that function",
            "quiz:Write an array",
            {
                name: "Array methods, simple",
                subList: [
                    "push","pop",'shift','unshift','reverse'
                ]
            },
            "scope",
            "quiz:What is hoisting?",
            "quiz:What is a callback function?",
            "quiz:How do we pass a callback as an argument?",
            "quiz:Write an anonymous function in both traditional and arrow syntax.",
            "quiz:What is a higher-order function?",
            {
                name: "Higher-order array methods",
                subList: [
                    "forEach",
                    "map",
                    "filter",
                    "reduce",
                    "sort",
                    "every",
                    "some",
                    "find",
                    "findIndex"
                ]
            },
            "quiz:What is an object property? What is a method?",
            "quiz:Write an object with two properties and a method.",
            "quiz:Use dot notation to refer to one of the object properties. Use dot notation to invoke the method.",
            "quiz:Same as last question, but use square bracket notation.",
            {
                name: "DOM methods",
                subList: [
                    "getElementById",
                    "querySelector",
                    "querySelectorAll",
                ]
            },
            "quiz:Name five HTML element events.",
            "quiz:Add a click event listener, take its event into a callback, and prevent the default behavior",
            {
                name: "HTML Element properties",
                subList: [
                    "innerText",
                    "innerHTML",
                    "textContent",
                    "style",
                    "innerWidth/outerWidth",
                    "classList (.add, .remove, .toggle)",
                ]
            },
            {
                name: "HTML Element methods",
                subList: [
                    "append/appendChild",
                    "remove",
                    "addEventListener",
                    "set/getAttribute",
                ]
            },
            "quiz:Write a JSON object",
            "JSON.stringify, JSON.parse",
            "localStorage, sessionStorage, document.cookie",
            "window",
            "window.location",
            "setTimeout, setInterval, clearTimeout, clearInterval",
            "asynchronous",
            "quiz:Invoke fetch, convert the response to json, and log the result (using .then)",
            "quiz:Same as last question, but with async/await syntax.",
            "quiz:Define a class",
            "quiz:Create a new instance of that class",
            "quiz:Create a new promise",
            "quiz:Write how you would export a module, both in ES and CJS syntax. Then import."
        ]
    }
    let saveDelay

    let chosenGroup = 'GENERAL'

    function update(target, groupName, name) {
        answers[groupName][name] = target.checked === undefined ? target.value : target.checked
        save()
    }

    function save() {
        clearTimeout(saveDelay)
        saveDelay = setTimeout(() => {
            localStorage.setItem('react-prereq-answers', JSON.stringify(answers))
        }, 500);
    }

    onMount(()=>{
        let savedAnswers = localStorage.getItem('react-prereq-answers')
        if (!savedAnswers) return
        answers = JSON.parse(savedAnswers)
    })

</script>

<div id="outer">
    <div id="inner">
        <div class="group-tabs">
            {#each Object.entries(groups) as [groupName, group]}
                <button on:click={()=>{chosenGroup = groupName}}
                    class:selected={chosenGroup === groupName}>
                    {groupName}
                </button>
            {/each}
        </div>
    
        {#each Object.entries(groups) as [groupName, group]}
            <div class="group" class:none={chosenGroup !== groupName}>
                {#each group as groupItem}
                    <div class="groupItem">
                        {#if typeof groupItem === "string"}
                            {#if groupItem.startsWith('quiz:')}
                            {@const q = groupItem.replace('quiz:','')}
                                <div>
                                    {q}
                                </div>
                                <textarea on:keyup={({ target }) => { update(target, groupName, groupItem) }}
                                value={answers[groupName][groupItem] || ""}    
                                />
                            {:else}
                                <div>
                                    {groupItem}
                                </div>
                                <input type="checkbox" on:change={({ target }) => { update(target, groupName, groupItem) }}
                                checked={answers[groupName][groupItem] || false}
                                >
                            {/if}
                        {:else}
                            <div>
                                {groupItem.name}
                                {#if groupItem.subList}
                                <ul>
                                    {#each groupItem.subList as listItem}
                                        <li>
                                            {listItem}
                                        </li>
                                    {/each}
                                </ul>
                                {/if}
                            </div>
                            <input type="checkbox" on:change={({ target }) => { update(target, groupName, groupItem.name) }}
                            checked={answers[groupName][groupItem.name] || false}
                            >
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    #outer {
        display: flex;
        justify-content: center;
    }
    #inner {
        width: 750px;
        max-width: 98%;
    }
    .none {
        display: none;
    }
    .groupItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: lightgray;
        border-radius: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .groupItem > *:first-child, .groupItem > *:last-child {
        flex: 0 0 40%;
    }
    .groupItem input[type="checkbox"] {
        width: 25px;
        height: 25px;
    }
    .group-tabs {
        display: flex;
        margin: 1rem 0;
    }
    .group-tabs > * {
        flex-grow: 1;
        cursor: pointer;
        padding: 1rem;
        background-color: aquamarine;
    }
    .group-tabs > .selected {
        background-color: rgb(54, 189, 144);
    }
    .wide {
        cursor: pointer;
        padding: .5rem;
        background-color: aquamarine;
        margin-bottom: 1rem;
        width: 100%;
    }
</style>