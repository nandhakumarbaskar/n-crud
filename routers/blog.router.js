const blogController = require("../controllers/blog.controller")

const router = require("express").Router()

router.post("/", blogController.createBlog)
router.get("/", blogController.getBlogs)
router.get("/:id", blogController.getBlogById)
router.put("/:id", blogController.updateBlog)
router.delete("/:id", blogController.deleteBlog)
router.delete("/", blogController.deleteAll)

module.exports = router