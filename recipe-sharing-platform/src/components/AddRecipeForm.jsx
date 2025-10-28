const [steps, setSteps] = useState("");

// Inside handleSubmit validation
if (!steps) newErrors.steps = "Steps are required";

// When creating new recipe object
onAddRecipe({
  id: Date.now(),
  title,
  ingredients: ingredients.split(",").map(i => i.trim()),
  steps, // <-- renamed
  image: "https://via.placeholder.com/150",
  summary: steps.substring(0, 50) + "...",
});

// JSX textarea
<div className="mb-4">
  <label className="block mb-1 font-semibold">Preparation Steps</label>
  <textarea
    value={steps}
    onChange={(e) => setSteps(e.target.value)}
    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows={5}
  />
  {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
</div>
