import { React, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Checkbox } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "../styles/AddForm.scss";
import { authContext } from "../providers/AuthProvider";
import { getMusclesByBodyPartName } from "../helpers/selectors";


const AddForm = (props) => {
  const { user } = useContext(authContext);
  const { date, onSubmit, onClose, exercises } = props;

  const {
    watch, // follow up for changes in the input field
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    control, //same as register but for fields other than input
    formState: { errors },
  } = useForm({
    defaultValues: {
      bodyPart: "",
      muscleGroup: "",
      exerciseName: "",
      duration: null,
      sets: null,
      reps: null,
      weight: null,
      Mo: false,
      Tu: false,
      We: false,
      Th: false,
      Fr: false,
      Sa: false,
      Su: false,
    },
  });

  const selectedPart = watch("bodyPart").value;
  const updatedMuscles = getMusclesByBodyPartName(exercises, selectedPart);

  return (
    <main>
      <form
        className="add-form"
        onSubmit={handleSubmit(async (data) => {
          console.log("Data from form =====> ", data);
          // Use axios post to add exercise to database.
          await axios.post(
            `/day-exercises/${user.id}/${date}/new`,
            data
          );

          // Change showAddForm state to false and cause re-render of calender component.
          //  This updated the current day with added exercise.
          onSubmit();
        })}
      >
        <div className="add-close-cross">
          <CancelIcon fontSize="large" onClick={onClose} />
        </div>
        <div className="add-form-name">
          <h2>Schedule Exercise</h2>
        </div>
        {/* Dropdown */}
        <div className="form-dropdown">
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <label className="form-label">Body Part :</label>
            </Grid>
            <Grid item xs={7}>
              <Controller
                name="bodyPart"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    // isClearable
                    {...field}
                    options={[
                      { value: "chest", label: "Chest" },
                      { value: "lower arms", label: "Lower arms" },
                      { value: "lower legs", label: "Lower legs" },
                      { value: "neck", label: "Neck" },
                      { value: "shoulders", label: "Shoulders" },
                      { value: "upper arms", label: "Upper arms" },
                      { value: "upper legs", label: "Upper legs" },
                      { value: "waist", label: "Waist" },
                      { value: "back", label: "Back" },
                      { value: "cardio", label: "Cardio" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                )}
              />
            </Grid>
          </Grid>
        </div>
        <div className="form-dropdown">
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <label className="form-label">Muscle Group :</label>
            </Grid>
            <Grid item xs={7}>
              <Controller
                name="muscleGroup"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    // isClearable
                    {...field}
                    options={updatedMuscles}
                  />
                )}
              />
            </Grid>
          </Grid>
        </div>

        {/* Inputs field */}
        {/* Error messages for name field validation */}
        {errors.exerciseName?.type === "required" && (
          <p>Give the name for your exersicise.</p>
        )}
        {errors.exerciseName?.type === "maxLength" && (
          <p>Max length for name is 25 characters.</p>
        )}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Name : * </label>
          </Grid>
          <Grid item xs={7}>
            <input
              placeholder="Exercise Name / max 25 char"
              {...register("exerciseName", {
                required: true,
                maxLength: 25,
              })}
            />
          </Grid>
        </Grid>
        {/* Error messages for duration field. */}
        {errors.duration?.type === "required" && (
          <p> Duration field can't be empty. </p>
        )}
        {errors.duration?.type === "min" && <p>Duration can't be negative.</p>}
        {errors.duration?.type === "max" && (
          <p>Duration can't be more then 1000.</p>
        )}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Duration (min) : </label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Duration"
              {...register("duration", {
                required: true,
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
          </Grid>
        </Grid>
        {/* Error messages for sets field. */}
        {errors.sets?.type === "required" && <p> Sets field can't be empty.</p>}
        {errors.sets?.type === "min" && <p>Sets can't be negative.</p>}
        {errors.sets?.type === "max" && <p>Sets can't be more then 1000.</p>}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Sets :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Sets"
              {...register("sets", {
                required: true,
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
          </Grid>
        </Grid>
        {/* Error messages for reps field. */}
        {errors.reps?.type === "required" && <p> Reps field can't be empty.</p>}
        {errors.reps?.type === "min" && <p>Reps can't be negative.</p>}
        {errors.reps?.type === "max" && <p>Reps can't be more then 1000.</p>}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Reps :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Reps"
              {...register("reps", {
                required: true,
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
          </Grid>
        </Grid>
        {/* Error messages for weight field. */}
        {errors.weight?.type === "min" && <p>Weight can't be negative.</p>}
        {errors.weight?.type === "max" && (
          <p>Weight can't be more then 1000.</p>
        )}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Weight (lbs) :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Weight"
              {...register("weight", {
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
          </Grid>
        </Grid>
        {/* Checkboxes  */}
        <label className="form-label">Recurring :</label>
        <div className="form-checkboxes">
          <label> Mo </label>
          {/* control your input into the hook by invoking the "field" function */}
          <Controller
            name="Mo"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label> Tu </label>
          <Controller
            name="Tu"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label> We </label>
          <Controller
            name="We"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label> Th </label>
          <Controller
            name="Th"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label> Fr </label>
          <Controller
            name="Fr"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label> Sa </label>
          <Controller
            name="Sa"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label> Su </label>
          <Controller
            name="Su"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>
        <input value="add Exercise" className="add-input" type="submit" />
      </form>
    </main>
  );
};
export default AddForm;
