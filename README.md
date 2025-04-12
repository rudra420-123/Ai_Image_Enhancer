## 🌟 AI Image Enhancer

An AI-powered web app that allows users to upload an image and instantly enhance its quality, clarity, and detail using advanced machine learning techniques — all within a sleek, modern interface.

---

### 📸 Features

- 🖼️ Upload images (Drag & Drop or Click)
- ⚙️ AI-powered enhancement (API integration ready)
- 🧠 Fast and intuitive processing
- 🎨 Modern, responsive UI with Tailwind CSS
- 🔄 Real-time image preview (original vs enhanced)
- 🧼 Smooth animations and loaders
- 📂 Download enhanced image (optional feature)

---

### 🛠️ Tech Stack

| Frontend   | Styling      | State Management |
|------------|--------------|------------------|
| React.js   | Tailwind CSS | React Hooks      |

---

### 🚀 Getting Started

1. **Clone the Repository**

```bash
git clone https://github.com/rudra420-123/Ai_Image_Enhancer.git
cd Ai_Image_Enhancer
```

2. **Install Dependencies**

```bash
npm install
```

3. **Start Development Server**

```bash
npm run dev
```

4. **Build for Production**

```bash
npm run build
```

---

### 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx
│   ├── ImagePreview.jsx        // File uploader with drag & drop
│   ├── ImageUpload.jsx         // Side-by-side original vs enhanced
│   ├── Loading.jsx             // Custom 3D loading spinner
├── utils/
│   └── enhanceImageApi.jsx     // Main Api Calling and All Logics
├── App.jsx
├── main.jsx
```

---

### 📦 API Integration

- API calls are set up but can be toggled or mocked.
- Hook into your AI service like [Replicate](https://replicate.com), [DeepAI](https://deepai.org/), or custom ML model endpoint.
- Comment/uncomment API call in `UploadImageHandler` inside your logic.

---

### 📌 To-Do / Future Improvements

- [ ] Add image download feature  
- [ ] Add user authentication  
- [ ] Upload progress bar  
- [ ] History of uploaded/enhanced images

---

### 🤖 Made with 💙 by [@Rudra Prasad Nayak AI](https://github.com/rudra420-123/)