
const TableForTasks = (props) => {
    console.log(props.todolist);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Eil.nr</th>
                        <th>Pavadinimas</th>
                        <th>Ar atlikta</th>
                    </tr>
                </thead>

                {
                    props.todolist.map((oneTask, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{oneTask.text}</td>
                                <td>{oneTask.isCompleted ? "Done" : "In progres"}</td>
                            </tr>
                        </tbody>

                    )

                    )
                }
            </table>
        </div>
    )
}

export default TableForTasks
