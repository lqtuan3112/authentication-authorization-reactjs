using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace backend_authenticaton.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {

        [HttpPost("getAdminToken")]
        public IActionResult GetAdminToken()
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "ADMIN"),
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var refreshTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "ADMIN"),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var cookieOptions = new CookieOptions
            {
                Secure = true,
                HttpOnly = true,
                SameSite = SameSiteMode.Lax //Chỉ cho phép web bên thứ 3 truyền cookie với method get
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            var refreshToken = tokenHandler.WriteToken(tokenHandler.CreateToken(refreshTokenDescriptor));
            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
            return Ok(token);
        }

        [HttpPost("getUserToken")]
        public IActionResult GetUserToken()
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "USER"),
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var refreshTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "USER"),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var cookieOptions = new CookieOptions
            {
                Secure = true,
                HttpOnly = true,
                SameSite = SameSiteMode.Lax //Chỉ cho phép web bên thứ 3 truyền cookie với method get
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            var refreshToken = tokenHandler.WriteToken(tokenHandler.CreateToken(refreshTokenDescriptor));
            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
            return Ok(token);
        }

        [HttpPost("refreshTokenAdmin")]
        public IActionResult RefreshTokenAdmin()
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "ADMIN"),
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenTokenkeyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var refreshTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "ADMIN"),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenTokenkeyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var cookieOptions = new CookieOptions
            {
                Secure = true,
                HttpOnly = true,
                SameSite = SameSiteMode.Lax //Chỉ cho phép web bên thứ 3 truyền cookie với method get
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            var refreshToken = tokenHandler.WriteToken(tokenHandler.CreateToken(refreshTokenDescriptor));
            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
            return Ok(token);
        }

        [HttpPost("refreshTokenUser")]
        public IActionResult RefreshTokenUser()
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "USER"),
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var refreshTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "USER"),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("keyGenTokenkeyGenToken")), SecurityAlgorithms.HmacSha256Signature), // Tạo access token
            };

            var cookieOptions = new CookieOptions
            {
                Secure = true,
                HttpOnly = true,
                SameSite = SameSiteMode.Lax //Chỉ cho phép web bên thứ 3 truyền cookie với method get
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            var refreshToken = tokenHandler.WriteToken(tokenHandler.CreateToken(refreshTokenDescriptor));
            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
            return Ok(token);
        }


        [Authorize(Roles = "ADMIN")]
        [HttpPost("helloAdmin")]
        public IActionResult HelloAdmin()
        {
           
            return Ok("Hello, admin");
        }

        [Authorize(Roles = "USER")]
        [HttpPost("helloUser")]
        public IActionResult HelloUser()
        {

            return Ok("Hello, user");
        }
    }
}