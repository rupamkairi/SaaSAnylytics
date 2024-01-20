package fiberApp

import (
	"github.com/gofiber/fiber/v2"
)

var (
	App *fiber.App
)

func Init() {
	App := fiber.New()

	App.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	App.Listen(":3000")
}
