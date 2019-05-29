import React from 'react'

export default function About() {
    return (
        <div className = "container-fluid">
            <main>
                <div className = "about-image">
                <img 
                    className= "img-fluid rounded mx-auto d-block"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/34/Il_pomodoro.jpg"
                    alt="the tomato timer Pomodoro used to develop his technique" />
                </div>
                <article>
                    <h1>
                        The Pomodoro Technique
                    </h1>
                    <p>
                        The pomodoro technique is a time management method based on 25-minute stretches of focused work broken by 3-to-5 minute breaks and 15-to-30 minute breaks following the completion of  four work periods. 
                    </p>
                    <p>
                        Developer and entrepreneur Francesco Cirillo created the pomodoro technique in the late 1980s, when he began to use his tomato-shaped kitchen timer to organize his work schedule. Each working interval is called a pomodoro, the Italian word for tomato (plural: pomodori). 
                    </p>
                    <p>
                        The pomodoro technique essentially trains people to focus on tasks better by limiting the length of time they attempt to maintain that focus and ensuring restorative 
                        breaks from the effort. The method is designed to overcome the tendencies to procrastinate and to multitask
                         -- both of which have been found to impair productivity -- and to help users develop more efficient work habits. 
                         Effective time management allows people to get more done in less time, 
                        while also fostering a sense of accomplishment and reducing the potential for <a href="https://en.wikipedia.org/wiki/Occupational_burnout" rel="noopener noreferrer" target = "_blank">burnout.</a>
                    </p>
                    <p>
                        Steps for the pomodoro technique include:
                        <ol>
                            <li>Decide on the task for the work segment.</li>
                            <li>Eliminate the potential for distraction. Close email and chat programs and shut down social media and other sites that are not related to the task.</li>
                            <li>Set the timer to 25 minutes.</li>
                            <li>Work on the task until the timer rings; record completion of the pomodoro.</li>
                            <li>Take a three-to-five minute break.</li>
                            <li>When four pomodori have been completed, take a 15-to-30 minute  break.</li>
                        </ol>
                    </p>
                    <p>
                        Various implementations of the pomodoro technique use different time intervals for task and break segments. For the breaks, it is strongly advised that the worker select an activity that contrasts with the task. Someone working at a computer, for example, should step away from the desk and do some kind of physical activity.
                    </p>
                    <p>check out more about this technique <a href="https://youtu.be/cH-z5kmVhzU" rel="noopener noreferrer" target="_blank">here; they have a great way they explain it</a></p>
                </article>
            </main>
        </div>
    )
}
