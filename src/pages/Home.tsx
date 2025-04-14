import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface UserData {
  name: string;
  age: number;
  email: string;
  gender: string;
  role: string;
  skills: string[];
  location: string;
  newsletter: boolean;
  experience: number;
  bio: string;
}

const roles = ["Admin", "User", "Manager"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston"];

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<UserData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    name: "",
    age: 0,
    email: "",
    gender: "Male",
    role: "User",
    skills: [],
    location: "",
    newsletter: false,
    experience: 0,
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSkillChange = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: "",
      age: 0,
      email: "",
      gender: "Male",
      role: "User",
      skills: [],
      location: "",
      newsletter: false,
      experience: 0,
      bio: "",
    });
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t("home")}</h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowForm(true)}
      >
        + Add User
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded p-6 grid gap-4 max-w-2xl"
        >
          <input
            className="border p-2 rounded"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 rounded"
            name="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 rounded"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="flex gap-4 items-center">
            <span className="font-semibold">Gender:</span>
            {["Male", "Female"].map((g) => (
              <label key={g} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                />
                {g}
              </label>
            ))}
          </div>

          <select
            name="role"
            className="border p-2 rounded"
            value={formData.role}
            onChange={handleChange}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <div>
            <p className="font-semibold mb-1">Skills:</p>
            <div className="flex gap-4 flex-wrap">
              {["React", "TypeScript", "Node.js"].map((skill) => (
                <label key={skill} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          <div>
            <input
              className="border p-2 rounded w-full"
              list="locations"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
            <datalist id="locations">
              {locations.map((loc) => (
                <option key={loc} value={loc} />
              ))}
            </datalist>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>

          <input
            className="border p-2 rounded"
            name="experience"
            type="number"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />

          <textarea
            className="border p-2 rounded"
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      )}

      <table className="mt-8 w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {[
              "Name",
              "Age",
              "Email",
              "Gender",
              "Role",
              "Skills",
              "Location",
              "Newsletter",
              "Experience",
              "Bio",
            ].map((heading) => (
              <th key={heading} className="border px-3 py-2 text-left">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border px-3 py-2">{user.name}</td>
              <td className="border px-3 py-2">{user.age}</td>
              <td className="border px-3 py-2">{user.email}</td>
              <td className="border px-3 py-2">{user.gender}</td>
              <td className="border px-3 py-2">{user.role}</td>
              <td className="border px-3 py-2">{user.skills.join(", ")}</td>
              <td className="border px-3 py-2">{user.location}</td>
              <td className="border px-3 py-2">
                {user.newsletter ? "Yes" : "No"}
              </td>
              <td className="border px-3 py-2">{user.experience}</td>
              <td className="border px-3 py-2">{user.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
