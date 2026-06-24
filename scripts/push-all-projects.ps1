# Paleisk po: gh auth login
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$repos = @(
  @{ path = "c:\Users\eve\Desktop\projektai\3perdarytasdarbas"; name = "3perdarytasdarbas"; desc = "Android nuotrauku redaktorius" },
  @{ path = "c:\Users\eve\Desktop\projektai\kmi-skaiciuokle\app"; name = "kmi-skaiciuokle"; desc = "Android KMI skaiciuokle" },
  @{ path = "c:\Users\eve\Desktop\projektai\vizitine-kortele\2nd sc\2nd kodas"; name = "vizitine-kortele"; desc = "Android vizitine kortele" },
  @{ path = "c:\Users\eve\Desktop\projektai\aplikacija"; name = "arcgis-zemelapis"; desc = "ArcGIS Lietuvos miestu zemelapis" },
  @{ path = "c:\Users\eve\Desktop\projektai\babylon-3d-scena"; name = "babylon-3d-scena"; desc = "Babylon.js 3D scena (index.html)" }
)

gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Prisijunk: gh auth login"
  exit 1
}

foreach ($r in $repos) {
  $remote = "https://github.com/ievavaineikyte-ctrl/$($r.name).git"
  Write-Host "`n=== $($r.name) ==="

  gh repo view "ievavaineikyte-ctrl/$($r.name)" 2>$null
  if ($LASTEXITCODE -ne 0) {
    gh repo create "ievavaineikyte-ctrl/$($r.name)" --public --description $r.desc
    if ($LASTEXITCODE -ne 0) {
      Write-Host "X Nepavyko sukurti repozitorijos"
      continue
    }
    Write-Host "✓ Sukurta repozitorija"
  }

  git -C $r.path remote get-url origin 2>$null
  if ($LASTEXITCODE -eq 0) {
    git -C $r.path remote set-url origin $remote
  } else {
    git -C $r.path remote add origin $remote
  }

  git -C $r.path push -u origin main 2>&1 | Out-Null
  if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Ikelta: $remote"
  } else {
    Write-Host "X Push nepavyko"
  }
}

Write-Host "`nBaigta!"
