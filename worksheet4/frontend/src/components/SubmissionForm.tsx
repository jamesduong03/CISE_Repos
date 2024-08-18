import { useForm } from "react-hook-form";

export default function SubmissionForm() {
    const {register, handleSubmit } = useForm();

    const onSubmit = (data: any) => JSON.stringify(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title")} placeholder="title" />
            <p>
                <input {...register("authoers")} placeholder="Authors" />
            </p>
            <p>
                <input {...register("source")} placeholder="Source" />
            </p>
            <p>
                <input {...register("pubYear")} placeholder="Publication Year" />
            </p>
            <p>
                <input {...register("doi")} placeholder="DOI" />
            </p>

            <select {...register("linked_discussion")}>
                <option value="">Select SE practive...</option>
                <option value="TDD">TDD</option>
                <option value="Mob Programming">Mod Programming</option>
            </select>
            <input type="submit" />
        </form>
    );
}