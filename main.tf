terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.11"
    }
  }
}

variable "vercel_api_token" {
  type      = string
  sensitive = true
}

provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "coding_assessment_mrbravered" {
  name           = "coding-assessment-mrbravered"
  framework      = "nextjs"
  team_id        = "team_bDHd8aBPowHkPYNheq6JcVxq"
  root_directory = "web/"
  build_command  = "cd ../ && yarn build --filter=web"

  git_repository = {
    type = "github"
    repo = "Create-Inc-Candidates/coding-assessment-mrbravered"
  }

  environment = [
    {
      target = ["production"]
      key = "YARN_ENABLE_IMMUTABLE_INSTALLS"
      value = "false"
    },
    {
      target = ["production"]
      key = "AWS_S3_UPLOAD_ACCESS_KEY_ID"
      value = "development"
    },
    {
      target = ["production"]
      key = "AWS_S3_UPLOAD_SECRET_ACCESS_KEY"
      value = "development"
    },
  ]
}

resource "vercel_deployment" "coding_assessment_mrbravered_main" {
  project_id = vercel_project.coding_assessment_mrbravered.id
  ref        = "main"
  team_id    = "team_bDHd8aBPowHkPYNheq6JcVxq"
}
