# deploy.ps1 - Auto-deploy React app to GitHub Pages

# Step 1: Build
Write-Host "Building the app..." -ForegroundColor Yellow
npm run build

# Step 2: Switch to gh-pages branch
Write-Host "Switching to gh-pages branch..." -ForegroundColor Yellow
git checkout gh-pages

# Step 3: Copy build files over (force overwrite)
Write-Host "Copying build files..." -ForegroundColor Yellow
Copy-Item -Path build/* -Destination . -Recurse -Force

# Step 4: Add files (ignore symlink errors)
Write-Host "Adding files..." -ForegroundColor Yellow
git add . --ignore-errors

# Step 5: Commit
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Auto-deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Step 6: Push
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin gh-pages

Write-Host "Done! Wait 30-60 sec, then hard-refresh your site." -ForegroundColor Green