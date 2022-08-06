import React, {useEffect, useState} from 'react';



function RequestPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setUsers(data.slice(1, 11)))
    }, [])

    return (
        <div>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.title}</li>)
                }
            </ul>
        </div>
    );
}

export default RequestPage;
