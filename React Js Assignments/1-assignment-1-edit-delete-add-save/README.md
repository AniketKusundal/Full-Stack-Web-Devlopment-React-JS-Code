
1. **State Setup:**
   - It uses the `useState` hook to manage the state of the component. The state variable `data` holds an array of objects, each representing a row in the table. Each object has properties like `id` (a unique identifier), `fname` (name), and `isEdit` (a flag indicating whether the row is in edit mode).

   
   const [data, setData] = useState([
     { id: 0, fname: "Aniket", isEdit: false },
     { id: 1, fname: "Aniket", isEdit: false },
     { id: 2, fname: "Aniket", isEdit: false }
   ]);
   ```

2. Ref for Input:
   - It uses the `useRef` hook to create a reference (`ref1`) to an input element. This reference is later used to get the value entered in the input field.

   
   const ref1 = useRef(null);
   ```

3. **Event Handlers:**
   - `handelEditClick`: Sets the `isEdit` flag to `true` for a specific row when the "Edit" button is clicked.
   - `handelSaveClick`: Sets the `isEdit` flag to `false` for a specific row when the "Save" button is clicked.
   - `handelDeleteClick`: Removes a row from the `data` array when the "Delete" button is clicked.
   - `handelClickToAdd`: Adds a new row to the table with the name entered in the input field.
   - `HandelChange`: Updates the `fname` property of a row when the corresponding input field is changed.

4. **Rendering:**
   - Renders an input field and an "Add Data" button to add new rows to the table.
   - Renders a table with columns for "Name," "Edit/Save," and "Delete Data."
   - Maps through the `data` array to render rows with input fields, edit/save buttons, and delete buttons.

The component allows users to input names, edit existing names, save changes, and delete rows. The state (`data`) is updated immutably to trigger React's re-rendering mechanism.