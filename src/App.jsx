import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((response) => response.json())
            .then((loadedTodos) => {
                console.log(loadedTodos);
                setTodos(loadedTodos);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className={styles.app}>
            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                <div className={styles.todosList}>
                    {todos.map(({ id, title }, index) => (
                        <div className={styles.todosItem} key={id}>
                            {index + 1}. {title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
