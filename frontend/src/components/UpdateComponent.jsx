import { useParams } from "react-router-dom";
import UpdateStudentComponent from "./UpdateStudentComponent";

const UpdateComponent = () => {
    const params = useParams();
    const id = params.id;

    return (
        <div>
            <UpdateStudentComponent studentId={id}/>
        </div>
    )
}

export default UpdateComponent;